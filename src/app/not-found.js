import Link from "next/link";

export default function NotFound(){
    return (
       <div>
        <h1>This Page cannot be found</h1>
        <Link href={"/"}>Go to Home Page</Link>
       </div>
    );
}