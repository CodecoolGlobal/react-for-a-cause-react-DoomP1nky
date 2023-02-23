function AboutComponent() {
    return (
        <div id="grid-container">
            <div className="grid-item">
                <p className="AboutText">About</p>
                <div className="about--card">
                    <p className="AboutDescription">Our goal is to help lost pets back to their homes, find new loving homes for abandoned or stray cats, inform people about the importance of spaying or neutering and microchipping their pets and draw attention to the high number of unwanted animals.</p>
                    <ul className="about--list">
                        <li className="about--listItem">“I have studied many philosophers and many cats. The wisdom of cats is infinitely superior.” – Hippolyte Taine</li>
                        <li className="about--listItem">“As anyone who has ever been around a cat for any length of time well knows, cats have enormous patience with the limitations of the humankind.” – Cleveland Amory</li>
                        <li className="about--listItem">“Cats are inquisitive, but hate to admit it.” – Mason Cooley</li>
                        <li className="about--listItem">“I had been told that the training procedure with cats was difficult. It’s not. Mine had me trained in two days.” – Bill Dana</li>
                        <li className="about--listItem">“In ancient times cats were worshipped as gods; they have not forgotten this.” – Terry Pratchett</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default AboutComponent;