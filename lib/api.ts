export interface Session {
    session_id: string
    embed_url: string
    admin_token: string
}


interface Body {
    start_url: string
    kiosk: boolean
    ublock: boolean
    fps: number
    timeout: object
}


export async function getEmbedding(url: string, id: string) {
    const options = {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.HYPERBEAM_API}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
            start_url: url,
            kiosk: false,
            ublock: true,
            fps: 30,
            timeout: {
                inactive: 600,
                webhook: {
                    url: `https://funime-six.vercel.app/api/del/${id}`
                }
            }
        } as Body),
    }

    const response = await fetch('https://engine.hyperbeam.com/v0/vm', options)
    return response.json() as Promise<Session>
}

export async function makeSearch(value: string) {
    const v = await fetch('/api/anime',
        {
            method: 'POST',
            body: value
        })

    if (v.status == 200) {
        return await v.json()
    }
    return { results: [] }
}
