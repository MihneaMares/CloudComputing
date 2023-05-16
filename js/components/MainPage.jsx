// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch (error) {
			console.log(error);
		}
	}, []);

	const deleteRecord = (event) => {
		event.preventDefault();
		const id = event.target.id;
		try {
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
						setRecords(records.filter(record => record._id !== id));
				});
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<section className="bg-gray-200">
			<div className="container px-6 py-10 mx-auto">
				<h1 className="mx-auto text-center text-6xl text-purple-500">Wish Books Hub</h1>

				<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
					{records.map(record => (
						<div
							key={record._id}
							className="block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{record.title}
							</h5>
							<p className="font-normal text-white-700 text-white-400">
								Author: {record.author}
							</p>
                            <p className="font-normal text-white-700 text-white-400">
								Release year: {record.release_date}
							</p>
							<div className={"flex justify-center mt-4"}>
								<button type="button"
								        id={record._id}
								        onClick={deleteRecord}
								        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}