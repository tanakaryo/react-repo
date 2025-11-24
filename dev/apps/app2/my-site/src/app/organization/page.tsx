import Image from "next/image";
import imagePng from "./image5-5.png";

export default function Page() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>組織図</h2>
            <Image alt="organization" src={imagePng}></Image>
        </div>
    )
}