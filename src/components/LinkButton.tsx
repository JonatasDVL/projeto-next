import Link from "next/link";

interface PropsLinkButton {
  nomePage: string;
  urlPage: string;
}

export default function LinkButton(props: PropsLinkButton) {
  return (
    <Link className="text-gray-100 font-semibold px-4 py-2 border-2 rounded-md hover:text-zinc-900 hover:bg-gray-100 transform hover:scale-105 duration-200"
      href={`/${props.urlPage}`}>
      {props.nomePage}
    </Link>
  )
}