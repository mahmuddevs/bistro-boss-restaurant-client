import { Helmet } from "react-helmet-async"

const Title = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title}`} - Bistro Boss</title>
        </Helmet>
    )
}

export default Title