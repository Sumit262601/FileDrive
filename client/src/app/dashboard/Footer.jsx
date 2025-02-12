import { Footer, FooterBottom } from "@/components/ui/footer";
import { Link } from "react-router-dom";

export default function FooterSection() {
    return (
        <footer className="w-full bg-background px-4 border-t border-white">
            <div className="mx-auto max-w-container">
                <Footer className="flex items-center justify-between gap-4 sm:flex-col md:flex-row">
                    <div>© 2025 FileDrive . All rights reserved</div>
                    <div className="flex items-center gap-4">
                        <Link to="#">Privacy</Link>
                        <Link to="#">Terms of Condition</Link>
                    </div>
                </Footer>
            </div>
        </footer>
    );
}
