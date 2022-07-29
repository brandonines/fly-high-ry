import React from "react";

export default function Submit() {
    return (
        <main>
            <div className="submissions-container">
                <div>
                    <h1>
                        Submissions
                    </h1>
                    <p>
                        If you have any stories or words that you would like to share about Ryan, please click the link below. We'd love to share as many stories as we can!
                    </p>
                    <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSffiwGvTEEc_eLvyJPa5dFfLwDwnk0e2LWNEL4jrnrvAzKXwQ/viewform?usp=sf_linkß"
                    rel="noopener noreferrer" 
                    target="_blank"
                    >
                        <div className="box-1">
                            <div class="btn">
                                <span>Submit</span>
                            </div>
                        </div>
                        {/* <button className="btn btn-one">
                                CONTACT
                        </button> */}
                    </a>
                </div>
            </div>
        </main>
    )
}