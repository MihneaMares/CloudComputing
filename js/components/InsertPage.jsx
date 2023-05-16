// js/components/InsertPage.jsx
export default function InsertPage() {
	const insertRecord = (event) => {
		event.preventDefault();
		const title = document.getElementById("title").value;
		const author = document.getElementById("author").value;
		const release_date = document.getElementById("release_date").value;
		const data = {title, author, release_date};
		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			console.log("New record inserted");
			document.getElementById("title").value = "";
			document.getElementById("author").value = "";
			document.getElementById("release_date").value = "";
		});
	}

	return (
		<section className="bg-gray-200">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="mx-auto text-center text-6xl text-purple-500">Wish Books Hub</h1>

				<form>
					<div className="mb-6">
						<label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book title</label>
						<input type="text" id="title"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Book title" required/>
					</div>
					<div className="mb-6">
						<label htmlFor="author"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
						<input type="text" id="author"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Author" required/>
					</div>
					<div>
						<label htmlFor="release_date"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Release Year</label>
						<input type="text" id="release_date"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Release year" required/>
					</div>
					<div className="flex justify-center mt-4">
						<button type="submit"
								onClick={ insertRecord }
								className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit
						</button>
					</div>
					
				</form>
			</div>
		</section>
	)
}