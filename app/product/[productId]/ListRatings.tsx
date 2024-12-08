"Use Clinet";

import Avatar from "@/app/components/Avatar";
import Heading from "@/app/components/Headings";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRatingsProps {
  product: any;
}

const ListRatings: React.FC<ListRatingsProps> = ({ product }) => {
  if(product.reviews.length === 0) return null
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm- mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-[300px]">
                <div className="flex gap-2 items-center">
                  <Avatar src={review?.user.image}/>
                  <div>{review?.user.name}</div>
                  <div>{moment(review.createdDate).fromNow()}</div>
                </div>
                <div className="mt-2">
                  <Rating value={review.rating} readOnly />
                  <div className="ml-2">{review.comment}</div>
                  <hr className="mt-4 mb-4" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRatings;
