export const useAsset = () => {
    const config = useRuntimeConfig()

    const asset = (path: string) => {
        return `${config.app.baseURL}${path.replace(/^\/+/, '')}`
    }

    return {
        asset,
    }
}