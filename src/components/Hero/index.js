import React from 'react';
import {data} from "../../API"
const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <h1>Вкусные рецепты</h1>
                    {
                        data.map((el)=>(
                            <div>
                                <h2 style={{
                                    margin: "0 0 10px 0",
                                    fontWeight: "600",

                                }}>{el.name}</h2>
                                <h4  style={{
                                    fontWeight:"500"
                                }}>{el.ingredients.map(ingredients =>(
                                    <ul style={{
                                        marginLeft: "30px"
                                    }}>{ingredients.name}</ul>
                                ))}</h4>
                                <h2  style={{
                                    margin: "0 0 10px 0",
                                    fontWeight: "600",

                                }}>Инструкция по приготовлению</h2>
                                <ol>
                                    <h4  style={{
                                        fontWeight:"500",
                                        marginLeft: "18px"
                                    }}>{el.steps.map(steps =>(
                                        <li style={{
                                            marginLeft: "28px"
                                        }}>{steps}</li>
                                    ))}</h4>
                                </ol>

                                {/*<ol></ol>*/}
                                {/*<h4>{el.steps.map(steps =>(*/}
                                {/*    <li>{steps}</li>*/}
                                {/*))}</h4>*/}

                                <ol>
                                    {/*<h4>{el.ingredients.map(ingredients =>(*/}
                                    {/*    <li>{ingredients.name}</li>*/}
                                    {/*))}</h4>*/}

                                </ol>

                            </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero;