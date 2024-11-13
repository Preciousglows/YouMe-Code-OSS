export default function UserChallenges({ challenges }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Challenges Posted</h3>
            <ul className="space-y-4">
                {challenges.map((challenge) => (
                    <li key={challenge.id} className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-primary">{challenge.title}</h4>
                        <p className={`text-sm ${
                            challenge.difficulty === "Easy" ? "text-green-500" :
                            challenge.difficulty === "Medium" ? "text-yellow-500" :
                            "text-red-500"
                        }`}>
                            Difficulty: {challenge.difficulty}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
