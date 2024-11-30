export default function Movie(props: {url: string}) {
    return <div className="display-video-container"><iframe style={{border: 'none', width: '1600px', height: '900px'}} src={props.url} allowFullScreen={true} scrolling="no"></iframe></div>
}