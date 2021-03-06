function Dashboard(){
	function sendMail()
	{
		alert(1);
	}
	fetch("http://localhost:5050/travel/getDetails",{
		method:"GET",
	})
		.then((response) => response.json())
		.then((responseData)=>{
			console.log(responseData);
			document.getElementById("travelList").innerHTML='';
			let sz = responseData.length;
			console.log(sz);
			let html = '';
			for(let i=0;i<sz;i++)
			{
				let row = '';
				if(i%2==0)
				{
					row = '<tr style="background-color:lavender;">' +
						'<td>'+ responseData[i].name +'</td>' +
						'<td>'+ responseData[i].rollno +'</td>' +
						'<td>'+ responseData[i].programName+'</td>' +
						'<td>'+ responseData[i].branch +'</td>' +
						'<td>' +
						'28/4/2021' +
						'</td>' +
						'<td>' +
						'<button type="button" class="btn" onclick="sendMail()" style="background-color:#52595D;color:white">Ping</button>' +
						'</td>' +
						'</tr>';
				}
				else
				{
					row = '<tr style="background-color:azure;">' +
						'<td>'+ responseData[i].name +'</td>' +
						'<td>'+ responseData[i].rollno +'</td>' +
						'<td>'+ responseData[i].programName+'</td>' +
						'<td>'+ responseData[i].branch +'</td>' +
						'<td>' +
						'28/4/2021' +
						'</td>' +
						'<td>' +
						'<button type="button" class="btn" onClick={sendMail} style="background-color:#52595D;color:white">Ping</button>' +
						'</td>' +
						'</tr>';
				}
				html=html+row;
			}
			document.getElementById("travelList").innerHTML = html;
		})

	return <>
		<div>
			<div>
				<nav className="navbar" style={{backgroundColor:"lightblue"}}>
					<div className="container-fluid">
                <span className="navbar-text" style={{backgroundColor:"white",display:"block",padding:"5px"}}>
                Logo
                </span>
						<span>
                            STUDENT TRAVEL CONNECT
                        </span>
						<span>
                    <button id-type="button" className="btn btn-success" style={{backgroundColor:"white",color:"black"}}>Logout</button>
                </span>
					</div>
				</nav>
			</div>
			<div className="card p-3 shadow mb-5 bg-white rounded" style={{margin:"20px",backgroundColor:"white"}}>
				<div className="card-body">
					<div className="row" style={{textAlign:"left"}}>
						<div className="col-3">
							<label>Name</label>
							<input type="text" className="form-control" id="username">
							</input>
						</div>
						<div className="col-3">
							<label>Program Type</label>
							<select className="form-control">
								<option>--Select--</option>
								<option>MTECH</option>
								<option>IMTECH</option>
							</select>
						</div>
						<div className="col-3">
							<label>Branch</label>
							<select className="form-control">
								<option>--Select--</option>
								<option>CSE</option>
								<option>ECE</option>
							</select>
						</div>
						<div className="col-3">
							<label>Date</label>
							<input type="text" className="form-control" id="username">
							</input>
						</div>
					</div>
					{/*<h3 style={{textAlign:"left"}}>*/}
					{/*	Students Latest Travels*/}
					{/*</h3>*/}
					<br></br>
					<br></br>
					<hr></hr>
					<hr></hr>
					<br></br>
					<h4>Latest upcoming travels of students</h4>
					<div className="table-responsive" id="patientsList" style={{marginTop:"40px"}}>
						<table className="table table-bordered border border-dark border-1 align-middle">
							<thead>
							<tr>
								<th>
									Name
								</th>
								<th>
									Roll No
								</th>
								<th>
									Program Type
								</th>
								<th>
									Branch
								</th>
								<th>
									Date
								</th>
								<th>
									#
								</th>
							</tr>
							</thead>
							<tbody id="travelList">

							</tbody>

						</table>
					</div>
				</div>
			</div>
		</div>
	</>
}

export default Dashboard;