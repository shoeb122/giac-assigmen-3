import Link from "next/link"
export default function Header(){
    return(<ul className=" flex gap-10 bg-yellow-500" ><li>
        <Link href="/">navbar</Link></li>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/contact-us">contact-us</Link></li>
        <li><Link href="/footer">footer</Link></li></ul>
        )
}