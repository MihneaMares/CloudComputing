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
		<section className="bg-white dark:bg-gray-900">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="w-[500px] mx-auto text-center text-6xl">Wish Books Hub</h1>

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
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
					</button>
				</form>
			</div>
		</section>
	)
}