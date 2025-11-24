import Image from "next/image";
import kojichu from "./1131w-IgxNmoFmN5U.webp";

export default function Page() {
    return (
        <p style={{textAlign:'center'}} >
            <Image src={kojichu} alt="kojichu" width={500} height={500} />
        </p>
    )
}