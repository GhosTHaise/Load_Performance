import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
  
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
    <div>ResourceCard</div>
  )
}

export default ResourceCard