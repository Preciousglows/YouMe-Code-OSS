export default function UserSolutions({ solutions }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Submitted Solutions</h3>
            <ul className="space-y-4">
                {solutions.map((solution, index) => (
                    <li key={index} className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-primary">{solution.challengeTitle}</h4>
                        <pre className="bg-gray-100 p-3 rounded-md mt-2">
                            {solution.code}
                        </pre>
                    </li>
                ))}
            </ul>
        </div>
    );
}
