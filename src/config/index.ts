// TODO need to create yaml config instead of env file
const config = {
    apiBaseUrl : process.env.API_BASE_URL ?? '',
    apiKey: process.env.API_KEY ?? '',
    workspaceId: process.env.WORKSPACE_ID ?? '',
    defaultDescription: 'review and standby'
}
export default config