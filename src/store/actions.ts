import { ICompetence } from "./reducers/employees";

export enum ActionTypes {
	AddEmployee = "ADD_EMPLOYEE",
	UpdateEmployee = "UPDATE_EMPLOYEE",
	SelectEmployee = "SELECT_EMPLOYEE",
	DeleteEmployee = "DELETE_EMPLOYEE",
	UpdateMaxSimCompetencies = "UPDATE_MAX_SIMULTANEOUS_COMPETENCIES",
	UpdateAlert = "UPDATE_ALERT",
	ClearAlert = "CLEAR_ALERT",
}

export interface IAddEmployee {
	type: ActionTypes.AddEmployee;
	payload: {
		name: string,
		totalYearsExperience: number,
		competencies: ICompetence[]
	};
}

export function addEmployee(
	name: string,
	totalYearsExperience: number,
	competencies: ICompetence[]): IAddEmployee {
	return {
		type: ActionTypes.AddEmployee,
		payload: { 
			name, 
			totalYearsExperience,
			competencies
		}
	};
}

export interface IUpdateEmployee {
	type: ActionTypes.UpdateEmployee;
	payload: {
		id: number,
		name: string,
		totalYearsExperience: number,
		competencies: ICompetence[]
	};
}

export function updateEmployee(
	id: number,
	name: string,
	totalYearsExperience: number,
	competencies: ICompetence[]): IUpdateEmployee {
	return {
		type: ActionTypes.UpdateEmployee,
		payload: { 
			id,
			name,
			totalYearsExperience,
			competencies
		}
	};
}

export interface IDeleteEmployee {
	type: ActionTypes.DeleteEmployee;
	payload: {
		id: number
	};
}

export function deleteEmployee(id: number): IDeleteEmployee {
	return {
		type: ActionTypes.DeleteEmployee,
		payload: { 
			id
		}
	};
}

export interface IUpdateMaxSimCompetencies {
	type: ActionTypes.UpdateMaxSimCompetencies;
	payload: {
		value: number
	};
}

export function updateMaxSimCompetencies(value: number): IUpdateMaxSimCompetencies {
	return {
		type: ActionTypes.UpdateMaxSimCompetencies,
		payload: { 
			value
		}
	};
}

export interface IAlertPayload {
	messageTitle: string;
	messageContent: string;
	action: () => void;
}

export interface IAlertDialogue {
	type: ActionTypes.UpdateAlert;
	payload: IAlertPayload;
}

export function updateAlert(payload: IAlertPayload): IAlertDialogue {
	return {
		type: ActionTypes.UpdateAlert,
		payload
	};
}

export interface IClearDialogue {
	type: ActionTypes.ClearAlert;
}

export function clearAlert(): IClearDialogue {
	return {
		type: ActionTypes.ClearAlert
	};
}
