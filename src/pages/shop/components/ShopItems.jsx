import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductCard from "../../../components/ProductCard";


const ShopItems = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <section className="w-11/12 md:container xl:w-8/12 mx-auto my-14 md:my-24">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="outline-none border-none text-[#151515] text-xl text-center uppercase mb-14 md:mb-24">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-4">
                        <ProductCard />
                        <ProductCard />

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-4">
                        <ProductCard />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </TabPanel>
            </Tabs>
        </section>
    )
}

export default ShopItems