import Image from "next/image";
import kojichu from "./450-2010122107343030480.jpg";

export default function Page() {
    return (
        <p style={{textAlign:'center'}} >
            <Image src={kojichu} alt="kojichu" width={500} height={500} />
        </p>
    )
}