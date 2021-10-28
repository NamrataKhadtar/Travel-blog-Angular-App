import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService{

  listChangedEvent: EventEmitter<Post[]> = new EventEmitter;

    listOfPosts: Post[] = [
        //new Post(
          // 'Hampi',
           //'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar.',
           //'https://www.karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg',
           //'Namrata',
           //new Date(), 0, 0
         //),
    
         //new Post(
           //'Taj Mahal',
           //'Taj Mahal, also spelled Tadj Mahall, mausoleum complex in Agra, western Uttar Pradesh state, northern India. The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628–58) to immortalize his wife Mumtaz Mahal (“Chosen One of the Palace”), who died in childbirth in 1631, having been the emperor’s inseparable companion since their marriage in 1612. India’s most famous and widely recognized building.',
           //'https://www.thoughtco.com/thmb/1g2-jnNGFo6SMikINMmHOmKsBMI=/3865x2576/filters:fill(auto,1)/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg',
           //'namrata',
           //new Date(), 0, 0
        //),
        //new Post(
          //'Valley of Uttarakhand',
          //'Uttrakhand Valley of Flower is famous for its meadow of alpine flowers. This valley of flowers is situated in the Chamoli district of Uttrakhand and also recognised as UNESCO world heritage site. The location of the valley of flower is at an altitude of around 6200 feet above the sea level. This landscape of the valley of flower National Park is part of Nanda Devi Biosphere Reserve, Uttrakhand.',
          //'https://1.bp.blogspot.com/-qK-yv7G4ltc/XnWvWG9D8FI/AAAAAAAAD0M/9oddiFooXg4DDLjFKhUO3KcEzv9s8dBHQCEwYBhgL/s1600/Valley-Of-Flowers.jpg',
          //'namrata',
          //new Date(), 0, 0
        //),
        //new Post(
          //'Tulips Tourism in Kashmi',
          //'The Kashmir valley comes alive during the spring season. The entire valley is rife with many hued flowers and the graceful Chenar trees lend a touch of elegance to the feel good ambience that prevails in the valley at this point of time. The apple and pear trees too are in full bloom.',
          //'https://media.wsimag.com/attachments/44c76ce7a9236d617e5bd2f4c7230f22f4668afb/store/fill/1090/613/1b1bac4dc5646d35c3f24d70d28fec71e5f14b230928ed1702f14f229dbe/Tulip-Garden-in-Kashmir.jpg',
          //'namrata',
          //new Date(), 0, 0
        //),

      ];

      //facility 1
      getPosts(){
          return this.listOfPosts;
      }

      //facility 2
      deletePost(index: number){
          this.listOfPosts.splice(index, 1);
      }

      //facility 3
      addPost(post : Post){
          this.listOfPosts.push(post);
      }

      //facility 4
      updatePost(index: number, post: Post){
          this.listOfPosts[index] = post;
      }

      //facility 5
      getPost(index: number){
        return this.listOfPosts[index];
      }

      //facility 6
      getLike(index: number){
        return this.listOfPosts[index].numberOfLikes +=1;
      }
      getUnLike(index: number){
        return this.listOfPosts[index].numbeOfUnlike +=1;
      }

      //facility 7
      setPosts(listOfPosts : Post[]){
        this.listOfPosts = listOfPosts;
        this.listChangedEvent.emit(listOfPosts);
      }
}