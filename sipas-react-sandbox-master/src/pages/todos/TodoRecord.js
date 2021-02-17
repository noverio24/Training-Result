import { DataRecord, DataProxy } from 'system/BaseModel';

// class UserRecord extends DataRecord(
// 	{
// 		autorId: null,
// 		autorName: null
// 	},
// 	{
// 		idProperty: 'authorId'
// 	}
// ) {}

class TodoRecord extends DataRecord(
	{
		id: null,
		text: null,
		completed: false,
		userId: null
	},
	{
		name: 'TodoRecord',
		idProperty: 'id'
	}
) {
	// sample of converter field
	get strength() {
		return this.text.length;
	}

	isComplete(): boolean {
		return !!this.completed;
	}

	toggleComplete(): this {
		return this.set('completed', !this.completed);
	}
}

/**
 * User config and override goes here
 */
const TodoProxy = DataProxy(
	{
		model: TodoRecord,
		url: {
			read: 'https://jsonplaceholder.typicode.com/todos/{id}',
			create: 'POST https://jsonplaceholder.typicode.com/todos/',
			update: 'PUT https://jsonplaceholder.typicode.com/todos/{id}',
			destroy: 'DELETE https://jsonplaceholder.typicode.com/todos/{id}'
		},
		sourceMap: {
			text: 'title'
		}
	},
	{
		test() {
			console.log('test', this);
		}
	}
);

console.log('==> TEST <==');
//
const todo1 = new TodoRecord({ text: 'todo1' });
const todo2 = new TodoRecord({ text: 'todo2' });
const proxy1 = TodoProxy(todo1);
const proxy2 = TodoProxy(todo2);
console.log(TodoProxy(todo1), 'the factory content');
console.log(proxy1.getConfig === proxy2.getConfig, 'shared functions on "getConfig"?');
console.log(proxy1.getRecord === proxy2.getRecord, 'shared functions on "getRecord"?');
console.log(proxy1.save === proxy2.save, 'shared functions on "save"?');
console.log(proxy1.getRecord() !== proxy2.getRecord(), 'encapsuled record?');

console.log('==> SANDBOX <==');

console.log('todo converter working well?', todo1.strength === todo1.text.length);

console.log('load data');
TodoProxy().load(1, (r, p, id) => {
	console.log('loaded');
	console.log(r.getData());

	console.log('toggling complete');
	const updatedRecord = r.toggleComplete();

	console.log('saving record');
	p.with(updatedRecord).save(savedRecord => {
		console.log('saved');
		console.log(savedRecord.getData());

		console.log('test associated');
		savedRecord.lookup('');
	});

	// 	console.log(`load record ${id} success`, r, r.getData());
	// 	console.log(r === rp.getRecord(), 'returned record is proxied record');

	// 	const r2 = r.toggleComplete();
	// 	console.log(r2 !== rp.getRecord(), 'after update record, proxied record is not same with record');

	// 	console.log(rp.with(r2).getRecord() === r2, 'test change new record passed');
});

export default TodoRecord;
