import Link from "next/link";

interface PropsLinkButton {
  nomePage: string;
  urlPage: string;
  addClassName?: string;
}

export default function LinkButton(props: PropsLinkButton) {
  const addClassName = props.addClassName || "";

  return (
    <Link className={`text-gray-100 font-semibold px-4 py-2 border-2 rounded-md flex justify-center items-center hover:text-zinc-900 hover:bg-gray-100 transform hover:scale-105 duration-200 ${addClassName}`}
      href={`/${props.urlPage}`}>
      {props.nomePage}
    </Link>
  )
}