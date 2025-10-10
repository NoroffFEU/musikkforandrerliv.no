import ErrorBoundary from '../components/ErrorBoundary.jsx';

function TermsPage() {
    return (
        <ErrorBoundary>
            <section className="min-h-screen container mt-50 mx-auto px-8 text-center">
                <h1 className="font-semibold text-3xl mb-20">Our Terms and Conditions</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus libero minima explicabo minus deleniti molestias accusamus facere neque? Quas, harum id nemo aspernatur quo ratione blanditiis commodi maiores reiciendis vero?</p>
            </section>
        </ErrorBoundary>
    )
}

export default TermsPage;