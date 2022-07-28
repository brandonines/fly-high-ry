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
                        If you have any stories or words that you would like to share about Ryan, please send me an email and I will get it posted for you.
                    </p>
                    <a
                    href="/"
                    rel="noopener noreferrer" 
                    >
                        <div className="box-1">
                            <div class="btn">
                                <span>Contact</span>
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