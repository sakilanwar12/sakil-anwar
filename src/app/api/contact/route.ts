export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    const formspreeEndpoint = process.env.FORMSPREE_SERVE_URL as string;

    const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
        return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
}