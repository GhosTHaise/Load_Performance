import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
  
interface Props {
    title : string;
    id : string;
    image : string;
    downloadNumber : number;
    slug : string;
}
const ResourceCard = ({
    title,
    id,
    image,
    downloadNumber,
    slug
} : Props) => {
  return (
    <Card
        className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]"
    >
        <Link
            href={`/resource/${id}`}
        >
            <CardHeader>
                <div>
                    <Image
                        src={image}
                        className="h-full rounded-md bg-cover"
                        alt={title}
                        width={284}
                        height={440}
                    />
                </div>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
        </Link>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
    </Card>

  )
}

export default ResourceCard