
function Middle() {
    return(
        <footer>
            <div id="inner-footer">
                <div className="footer-column">
                    <div>FAQ</div>
                    <div>Help Center</div>
                    <div>Account</div>
                    <div>Android</div>
                    <div id="footer-english">English</div>
                    <div id="footer-copyright">© 1997-{new Date().getFullYear()} Vider, Inc.</div>
                </div>
                <div className="footer-column">
                    <div>Investor Relations</div>
                    <div>Jobs</div>
                    <div>Ways to Watch</div>
                </div>
                <div className="footer-column">
                    <div>Privacy</div>
                    <div>Cookie Preference</div>
                    <div>Corporate Information</div>
                </div>
                <div className="footer-column">
                    <div>Speed Test</div>
                    <div>Legal Notices</div>
                    <div>iOS</div>
                </div>
            </div>
        </footer>
    );
}
export default Middle