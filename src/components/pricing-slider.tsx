import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { useState } from "react";

export default function PricingSlider() {
    const [ mau, setMau ] = useState<number>(50000);

    /**
     * Calculates Branch Pricing wrt MAU
     *
     * @returns {string}
     * ---------------------------------------------
     */
    const getPriceForBranch = (): string => {

        if ( mau <= 10000 ) {
            return '$0';
        } else if ( mau < 500000 ) {

            const total = Math.round((mau - 10000) / 1000) * 5;
            return `$${ total }`;
        } else {
            return '$2,450+';
        }
    }

    /**
     * Calculates Branch Pricing wrt MAU
     *
     * @returns {string}
     * ---------------------------------------------
     */
    const getPriceForChottuLink = (): string => {

        if ( mau <= 25000 ) {
            return '$0';
        } else if ( mau <= 75000 ) {
            return '$19';
        } else if ( mau <= 150000 ) {
            return '$39';
        } else if ( mau < 500000 ) {
            return '$99';
        } else {
            return '$99+';
        }
    }

    return (
        <div className="p-4 rounded-2xl text-start sm:p-10 border-2 border-gray-400">
            <p className="sm:text-lg">How many monthly active users?
                <Popover>
                    <PopoverTrigger><Image src="/icons/question.svg" width="18" height="18" alt="info"
                                           className="inline-block ml-3"/></PopoverTrigger>
                    <PopoverContent side="right" sideOffset={ 8 }>ChottuLink calculates Monthly Active Users
                        (MAU) based on the number of unique
                        users who have opened the app at least once, from the 1st to the last day of
                        each month, based on UTC. The MAUs shown on chottuLink would be roughly similar
                        to the MAUs you get to see in your Google Analytics/Firebase..</PopoverContent>
                </Popover>
            </p>
            <div className="relative w-full px-3 md:px-0 pt-5">
                <div className="slider-container w-full">
                    <div id="thumb-label-container" className="thumb-label-container">
                        <div id="thumb-label" className="thumb-label"></div>
                    </div>

                    <Slider defaultValue={ [ 50000 ] } max={ 500000 } step={ 25000 }
                            onValueChange={ (value: number[]) => setMau(value[ 0 ]) }/>
                    {/*<input*/ }
                    {/*    type="range"*/ }
                    {/*    id="mau-slider"*/ }
                    {/*    className="w-full slider"*/ }
                    {/*    min="25000"*/ }
                    {/*    max="500000"*/ }
                    {/*    step="25000"*/ }
                    {/*    defaultValue={ 50000 }*/ }
                    {/*    onChange={ (event) => setMau(parseInt(event.target.value)) }*/ }
                    {/*    list="mau-steps"*/ }
                    {/*/>*/ }

                    {/*<datalist id="mau-steps">*/ }
                    {/*    <option value="25000"></option>*/ }
                    {/*    <option value="50000"></option>*/ }
                    {/*    <option value="100000"></option>*/ }
                    {/*    <option value="150000"></option>*/ }
                    {/*    <option value="200000"></option>*/ }
                    {/*    <option value="250000"></option>*/ }
                    {/*    <option value="300000"></option>*/ }
                    {/*    <option value="350000"></option>*/ }
                    {/*    <option value="400000"></option>*/ }
                    {/*    <option value="450000"></option>*/ }
                    {/*    <option value="500000"></option>*/ }
                    {/*</datalist>*/ }

                    <div
                        className="absolute left-0 right-0 md:left-3 md:right-4 mt-2 text-xs mx-3 md:mx-0"
                        style={ { bottom: "-15px" } }
                    >
                                    <span
                                        className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                                        style={ { left: "0%" } }>25k</span>
                        <span
                            className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                            style={ { left: "5.26%" } }>50k</span>
                        <span
                            className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                            style={ { left: "15.78%" } }>100k</span>
                        <span
                            className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                            style={ { left: "26.32%" } }>150k</span>
                        <span
                            className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                            style={ { left: "36.84%" } }>200k</span>
                        <span
                            className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                            style={ { left: "47.37%" } }>250k</span>
                        <span
                            className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                            style={ { left: "57.89%" } }>300k</span>
                        <span
                            className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                            style={ { left: "68.42%" } }>350k</span>
                        <span
                            className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                            style={ { left: "78.95%" } }>400k</span>
                        <span
                            className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                            style={ { left: "89.47%" } }>450k</span>
                        <span
                            className="absolute text-tertiary -translate-x-1/2 text-start whitespace-nowrap slider-label"
                            style={ { left: "100%" } }>500k+</span>
                    </div>
                </div>
            </div>

            <div className="mt-14 flex justify-center items-center sm:flex-row flex-col sm:gap-10 gap-5">
                <div className="text-center flex-1">
                    <h3 className="text-xl">ChottuLink</h3><sub>(Transparent Pricing)</sub>
                    <h2 className="text-3xl sm:text-4xl mt-3">
                  <span className="font-medium">
                    <span id="chottulink-price">{ getPriceForChottuLink() }</span><span
                      className="text-lg">/month</span>
                  </span>
                    </h2>
                </div>

                <div
                    className="sm:mt-2 w-max py-3 px-4 flex flex-col justify-center items-center border border-gray-800 rounded-xl w-[150px] bg-[#001D29]">
                    <h6 className="text-lg font-medium text-tertiary">vs</h6>
                </div>

                <div className="text-center flex-1">
                    <h3 className="text-xl">Branch.io</h3><sub>(Our Competitor)</sub>
                    <h2 className="text-3xl sm:text-4xl mt-3">
                  <span className="font-medium">
                    <span id="branch-price">{ getPriceForBranch() }</span><span className="text-lg">/month</span>
                  </span>
                    </h2>
                </div>
            </div>

            <h6 className="mt-10 font-secondary text-tertiary">ChottuLink pricing doesn&#39;t
                multiply
                as your MAUs grow,
                We ensure you never get a surprise bill.</h6>
        </div>
    );
}
