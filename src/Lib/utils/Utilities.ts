// Packages
import {Member} from 'eris';

// Class
class Utilities {
    isClass(input: any): any {
        return typeof input === 'function' &&
               typeof input.prototype === 'object' &&
               input.toString().substring(0, 5) === 'class'; 
    }

    trimArray(arr: string[] | any[], maxLength: number = 10): string[] | any[] {
		if (arr.length > maxLength) {
			const length: number = arr.length - maxLength;
            
            arr = arr.slice(0, maxLength);
			arr.push(`${length} more...`);
        }
        
		return arr;
    }
    
    formatBytes(bytes: number): string {
		if (bytes === 0) return '0 Bytes';
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(1024));
		return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
	}

	removeDuplicates(arr: string[] | any[]): string[] {
		return [...new Set(arr)];
	}

	capitalise(strn: string): string {
		return strn.split(' ').map(str => str.slice(0, 1).toUpperCase() + str.slice(1)).join(' ');
	}
};