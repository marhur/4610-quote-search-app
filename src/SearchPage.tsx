import { RandomQuote } from "./RandomQuote";

export const SearchPage = () => {
    console.log("SearchPage")
    return (
        <div>
            <div className="flex-input">
                <label>
                    Search for an author!
                    <input type='text' />
                </label>
            </div>
            <div> <RandomQuote quote='"This is so inspirational"' author="John Jame "/> </div>
        </div>
    )
  }