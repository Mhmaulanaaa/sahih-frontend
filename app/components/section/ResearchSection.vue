<template>
  <!-- Research Tree Section -->
  <section class="relative isolate overflow-hidden py-0 sm:py-5">
    <!-- Content -->
    <div class="relative mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
      <!-- Main Card -->
      <div
        class="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        <!-- Header -->
        <div class="px-6 pt-8 text-center sm:px-10 sm:pt-10">
          <span
            class="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-700"
          >
            Research
          </span>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Research Tree
          </h2>

          <div class="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-500"></div>
        </div>

        <!-- Research Cards -->
        <div class="px-6 pb-8 pt-8 sm:px-10 sm:pb-10">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <article
              v-for="research in researchTree"
              :key="research.title"
              class="group flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-[0_18px_40px_rgba(16,185,129,0.12)]"
            >
              <!-- Icon -->
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white"
              >
                <i :class="research.icon" class="text-lg"></i>
              </div>

              <!-- Title -->
              <h3
                class="mt-5 text-lg font-bold leading-snug text-slate-800 transition-colors duration-300 group-hover:text-emerald-700"
              >
                {{ research.title }}
              </h3>

              <!-- Description -->
              <p class="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {{ research.description }}
              </p>

              <!-- More Information -->
              <div class="mt-6">
                <a
                  :href="research.link"
                  class="group/button inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
                >
                  <span>More Information</span>

                  <i
                    class="fas fa-arrow-right text-xs transition-transform duration-300 group-hover/button:translate-x-1"
                  ></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const researchTree = [
  {
    title: "Maternity, Child Health and Quality of Life",
    icon: "fas fa-baby",
    description:
      "Our researchers work to improve care for babies, children, and adolescents with serious acute and chronic illness. Our research is improving diagnosis, treatment, and care, saving lives, and creating better outcomes for our most vulnerable to improve the quality of life.",
    link: "#",
  },
  {
    title: "Infection, Immunity and Microbiome",
    icon: "fas fa-virus",
    description:
      "Our researchers work to improve understanding the nature of infection and infectious disease, the role of immunity and to explore the world of microbiome in the quest of seeking the better cure of diseases.",
    link: "#",
  },
  {
    title: "Regenerative Medicine and Stem Cell",
    icon: "fas fa-dna",
    description:
      "Our researchers work to explore the world of regenerative medicine and developing stem cells in treating the rare and chronic illnesses. Stem cell research focused on understanding the biology of stem cells and exploring their potential applications in medicine and other areas.",
    link: "#",
  },
  {
    title: "Degenerative and Metabolic Diseases",
    icon: "fas fa-heart-pulse",
    description:
      "Our researcher works to find the better cure for degenerative disease and all metabolic conditions lead to illnesses. Precision medicine, also known as personalized medicine, is an approach to medical care that takes into account individual variations in genes, environment, and lifestyle when diagnosing and treating diseases.",
    link: "#",
  },
  {
    title: "Physical and Psychological Traumatology",
    icon: "fas fa-person-falling-burst",
    description:
      "Our researchers work on the study of wounds and injuries caused by accidents or violence to a person, and the surgical therapy and repair of the damage. The other part of the field are studies about management of people exposed to highly stressful and traumatic events, such as terrorist bombings, war disasters, fires, accidents, criminal and familial abuse, hostage-taking, hospitalization, major illness, abandonment, sudden unemployment.",
    link: "#",
  },
  {
    title: "Oncology and Palliative Care",
    icon: "fas fa-ribbon",
    description:
      "Our researchers work on the battle against tumour and cancers. The early detection, the better cure and the palliative care are the core of this research group.",
    link: "#",
  },
  {
    title: "Health Service Research",
    icon: "fas fa-hospital-user",
    description:
      "Our researchers work on the health systems or health policy and systems research. HSR is a multidisciplinary scientific field that examines how people get access to health care practitioners and health care services, how much care costs, and what happens to patients as a result of this care.",
    link: "#",
  },
];
</script>
