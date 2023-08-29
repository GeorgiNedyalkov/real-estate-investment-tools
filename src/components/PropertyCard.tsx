import { Property } from "../interfaces/interfaces.tsx";
import { IoLocation, IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";

export default function PropertyCard({
    propertyInformation,
}: {
    propertyInformation: Property;
}) {
    const propertyAddress = (
        <p>
            {propertyInformation.city +
                ", " +
                propertyInformation.state +
                " Area, " +
                propertyInformation.zipCode +
                " "}
        </p>
    );
    return (
        <article>
            <div className="relative mb-2">
                <h2 className="absolute top-4 left-4 text-white font-bold text-xl">
                    {propertyInformation.streetAddress}
                </h2>
                <img
                    className="w-64 h-64 rounded-lg"
                    src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
                    alt=""
                />
            </div>
            <div className="flex items-center gap-2 text-slate-500">
                <IoLocation className="text-xl " />
                {propertyAddress}
            </div>
            <div className="flex items-center gap-2">
                <div className="flex flex-col text-slate-500">
                    <IoBed />
                    {propertyInformation.bedrooms}
                </div>
                <div className="flex flex-col text-slate-500">
                    <FaBath />
                    {propertyInformation.bathrooms}
                </div>
            </div>
        </article>
    );
}
