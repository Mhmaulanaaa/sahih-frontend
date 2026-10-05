<script setup lang="ts">
import { useInstagram } from "~/composables/landing/instagram/useInstagram";
import { nextTick, onMounted, ref } from "vue";

interface InstagramPost {
  berita_ig_id: string;
  kode_embed: string;
  link_embed: string;
  tgl_upload?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
  is_active?: boolean;
  is_delete?: boolean;
}

const { getLanding } = useInstagram();

const instagramPosts = ref<InstagramPost[]>([]);
const loading = ref(true);

const getInstagramUrl = (embedHtml: string): string => {
  if (!embedHtml) return "";

  const match = embedHtml.match(/data-instgrm-permalink=["']([^"']+)["']/i);

  if (!match?.[1]) return "";

  const url = match[1].replace(/&amp;/g, "&").trim();

  try {
    const parsedUrl = new URL(url);

    return `${parsedUrl.origin}${parsedUrl.pathname}`;
  } catch {
    return url;
  }
};

const loadInstagramScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Instagram Embed API sudah tersedia
    if (typeof window !== "undefined" && (window as any).instgrm?.Embeds) {
      resolve();
      return;
    }

    // Script sudah pernah dibuat
    const existingScript = document.querySelector(
      'script[data-instagram-embed="true"]'
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), {
        once: true,
      });

      existingScript.addEventListener(
        "error",
        () => reject(new Error("Gagal memuat Instagram Embed API.")),
        {
          once: true,
        }
      );

      return;
    }

    // Buat script Instagram
    const script = document.createElement("script");

    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.dataset.instagramEmbed = "true";

    script.onload = () => resolve();

    script.onerror = () => {
      reject(new Error("Gagal memuat Instagram Embed API."));
    };

    document.body.appendChild(script);
  });
};

const processInstagramEmbeds = async () => {
  await nextTick();

  const win = window as any;

  if (!win.instgrm?.Embeds) return;

  const embeds = document.querySelectorAll(".instagram-media");

  if (!embeds.length) return;

  win.instgrm.Embeds.process();
};

const fetchInstagram = async () => {
  try {
    loading.value = true;

    const result = await getLanding(3);

    instagramPosts.value = result.response ?? [];

    // Render data Instagram terlebih dahulu
    loading.value = false;

    await nextTick();

    // Load Instagram Embed API
    await loadInstagramScript();

    // Process embed setelah script tersedia
    await processInstagramEmbeds();
  } catch {
    instagramPosts.value = [];
    loading.value = false;
  }
};

onMounted(() => {
  fetchInstagram();
});
</script>

<template>
  <section class="relative overflow-hidden py-12 sm:py-16 xl:py-5">
    <div class="relative mx-auto max-w-7xl px-5 sm:px-6">
      <!-- Loading -->
      <div v-if="loading" class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="i in 3"
          :key="i"
          class="h-[500px] animate-pulse rounded-2xl bg-gray-100"
        />
      </div>

      <!-- Instagram Posts -->
      <div
        v-else-if="instagramPosts.length"
        class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8"
      >
        <div v-for="post in instagramPosts" :key="post.berita_ig_id" class="group">
          <div
            class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/10"
          >
            <div class="p-3">
              <blockquote
                v-if="getInstagramUrl(post.link_embed)"
                class="instagram-media !mx-auto !mb-0 !w-full"
                :data-instgrm-permalink="getInstagramUrl(post.link_embed)"
                data-instgrm-version="14"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Empty -->
      <div v-else class="py-10 text-center text-sm text-gray-500">
        Belum ada posting Instagram.
      </div>
    </div>
  </section>
</template>
