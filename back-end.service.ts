import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import { tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class BackEndService{

    constructor(private postService: PostService, private http: HttpClient){

    }

    //Function 1 -- Save
    saveData(){
        //get list of Posts from PostService
        const listOfPost: Post [] = this.postService.getPosts();

        //sending list of Posts to backend DB
        this.http.put('https://live-post-ceb4b-default-rtdb.firebaseio.com/post.json', 
        listOfPost).subscribe((res) => {
            console.log(res);
        });
    }

    //Function 2 -- Fetch

    fetchdata(){
        this.http.get<Post[]>('https://live-post-ceb4b-default-rtdb.firebaseio.com/post.json')
        .pipe(
            tap((listOfPost : Post[]) => {
            console.log(listOfPost);
            this.postService.setPosts(listOfPost);
        })).subscribe();
    }
    
    // function - Login
    loginUser(){

    }
     //Function -Sign Up
     createUser(){
     
    }


}