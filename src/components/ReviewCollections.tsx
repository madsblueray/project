
interface reviewBodyProps {
    reviewTitle: string,
    reviewContents: string,
    author: string,
}

export const ReviewBody : React.FC<reviewBodyProps> = ({ reviewTitle, reviewContents, author }) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-lg font-bold font-sono">&#9734;&#9734;&#9734;&#9734;&#9734;</h1>
            <div>
                <h1 className="text-sm tracking-tighter font-bold font-sono">{reviewTitle}</h1>
                <h1 className="text-sm tracking-tighter font-sono">{reviewContents}</h1>
            </div>
            <h1 className="text-right text-sm tracking-tighter font-sono">- {author}</h1>
        </div>
    )
}

export const catballReviews = [
    {
        reviewTitle: "Catball!!",
        reviewContents: "Such a fun yet addicting game!",
        author: "Catball Fan",
    },
    {
        reviewTitle: "Amazing",
        reviewContents: "This game cures my happiness 😻",
        author: "W33zie",
    },
    {
        reviewTitle: "cool cats/ great tunes",
        reviewContents: "super mega awesome!!!!!!!!",
        author: "bellemyc",
    },
    {
        reviewTitle: "Catball Dreamin",
        reviewContents: "Catball makes me @finallyhappy too :^)",
        author: "FeedbackFriend✨",
    },
    {
        reviewTitle: "cute and addictive",
        reviewContents: "thank you for making this game, i am very addicted :) the cats are cute. i saw the qr code for this game on a parking meter and thought i’d try. glad i did.",
        author: "Is meh",
    },
    
    
]