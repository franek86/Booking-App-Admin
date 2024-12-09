import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Props = {
  title?: string;
  description?: string;
  content: string;
  image?: string;
};

function SingleCard({ title, description, content }: Props) {
  return (
    <Card>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default SingleCard;
