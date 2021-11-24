import {useRouter} from 'next/router'
import useSwr from 'swr'
import {Alert} from "reactstrap";
import React from "react";

const fetcher = (url: any) => fetch(url).then((res) => res.json())

export default function Health() {
    const router = useRouter()
    const {data, error} = useSwr(
        `/api/health`,
        fetcher
    )

    if (error) return <div>Failed to load health</div>
    if (!data) return <div>Loading...</div>

    console.log(data)

    return <>
        <h2>Blaise health</h2>
        {
            data.map((item: any) => {
                return (
                    <Alert color={(item.status === "OK" ? "success" : "danger")} key={item["health check type"]}>
                        <strong>{(item.status === "OK" ? "Healthy!" : "Sick!")}</strong> {item["health check type"]}: {item.status}
                    </Alert>
                )
            })
        }
    </>
}