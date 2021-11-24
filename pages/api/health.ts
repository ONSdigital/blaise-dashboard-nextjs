import BlaiseApiClient from "blaise-api-node-client";

export default function healthHandler(req: any, res: any) {
    const {
        method,
    } = req

    switch (method) {
        case 'GET':
            const blaiseApiClient = new BlaiseApiClient(`http://localhost:8000`);

            blaiseApiClient.getDiagnostics()
                .then((diagnostics) => {
                    res.status(200).json(diagnostics)
                })
            break
        default:
            res.setHeader('Allow', 'GET')
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

