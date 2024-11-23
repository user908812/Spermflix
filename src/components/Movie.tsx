export default function Movie(props: {url: string}) {
    return <div className="display-video-container"><iframe style={{border: 'none'}} src={props.url} width="1600" height="900" allowFullScreen={true} allowscriptaccess="always" scrolling="no"></iframe></div>
}