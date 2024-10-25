import "./subscription.scss"
export default function Subscription() {
    return (<>
        <div className="subscription-form">
            <h2>Subscribe to our Blogs</h2>
            <form action="#">
                    <input type="email" placeholder="Email Address" />
                    <button id="email-sub">Send</button>
               
            </form>
        </div>
    </>)
}