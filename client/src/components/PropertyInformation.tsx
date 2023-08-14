import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { Property } from "../interfaces/IProperty";

export default function PropertyInformation({
    propertyInformation,
    onPropertyChange,
}: {
    propertyInformation: Property;
    onPropertyChange: React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    >;
}) {
    const [isDetailed, setIsDetailed] = useState<boolean>(false);

    return (
        <div className="flex justify-between w-6/12">
            <section className="mb-52">
                <h2 className="text-2xl font-bold mb-5">
                    Property Information
                </h2>

                <div className="mb-2">
                    <label>Street Address</label>
                    <input
                        name="streetAddress"
                        className="border w-40 mx-2 p-2"
                        type="text"
                        value={propertyInformation?.streetAddress}
                        onChange={onPropertyChange}
                    />
                </div>
                <div className="mb-2">
                    <label>City</label>
                    <input
                        name="city"
                        className="border w-40 mx-2 p-2"
                        type="text"
                        value={propertyInformation?.city}
                        onChange={onPropertyChange}
                    />
                </div>
                <div className="mb-2">
                    <label>State</label>
                    <input
                        name="state"
                        className="border w-40 mx-2 p-2"
                        type="text"
                        value={propertyInformation?.state}
                        onChange={onPropertyChange}
                    />
                </div>
                <div className="mb-2">
                    <label>Zip Code</label>
                    <input
                        name="zipCode"
                        className="border w-40 mx-2 p-2"
                        type="text"
                        value={propertyInformation?.zipCode}
                        onChange={onPropertyChange}
                    />
                </div>

                <button
                    onClick={() => setIsDetailed(!isDetailed)}
                    className="border hover:bg-slate-200 cursor-pointer p-2 mb-5"
                >
                    Add additional property features
                </button>

                {isDetailed && (
                    <>
                        <div className="mb-2">
                            <label>Bedrooms</label>
                            <input
                                name="bedrooms"
                                className="border w-40 mx-2 p-2"
                                type="text"
                                value={propertyInformation?.bedrooms}
                                onChange={onPropertyChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label>Bathrooms</label>
                            <input
                                name="bathrooms"
                                className="border w-40 mx-2 p-2"
                                type="text"
                                value={propertyInformation?.bathrooms}
                                onChange={onPropertyChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label>Size</label>
                            <input
                                name="size"
                                className="border w-40 mx-2 p-2"
                                type="text"
                                value={propertyInformation?.size}
                                onChange={onPropertyChange}
                            />
                        </div>
                        <div className="mb-2">
                            <label>Year Built</label>
                            <input
                                name="yearBuilt"
                                className="border w-40 mx-2 p-2"
                                type="text"
                                value={propertyInformation?.yearBuilt}
                                onChange={onPropertyChange}
                            />
                        </div>
                        <div className="mb-2 flex flex-col">
                            <label>Description</label>
                            <textarea
                                name="description"
                                value={propertyInformation?.description}
                                onChange={onPropertyChange}
                            />
                        </div>
                    </>
                )}
            </section>
            <section>
                <PropertyCard propertyInformation={propertyInformation} />
                <div>
                    {/* optional */}
                    {isDetailed && (
                        <div>
                            <p>Size: {propertyInformation?.size}</p>
                            <p>Year Built: {propertyInformation?.yearBuilt}</p>
                            <p>
                                Description: {propertyInformation?.description}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
