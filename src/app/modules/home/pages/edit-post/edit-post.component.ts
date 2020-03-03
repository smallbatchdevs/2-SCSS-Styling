import {Component}              from '@angular/core';
import {ActivatedRoute}         from '@angular/router';
import {Observable}             from 'rxjs';
import {DatabaseService}        from 'src/app/shared/services/database/database.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {filter, map, pluck}     from 'rxjs/operators';
import {objectExists}           from '../../../../shared/services/utilites/utilities.service';

@Component({
             selector   : 'app-edit-post',
             templateUrl: './edit-post.component.html',
             styleUrls  : ['./edit-post.component.scss']
           })
export class EditPostComponent {
  form$: Observable<FormGroup> = this.router.params.pipe(pluck('uid'),
                                                         filter(objectExists),
                                                         map(this.database.getPost),
                                                         map(post => this.formBuilder.group({
                                                                                              uid        : post.uid,
                                                                                              title      : post.title,
                                                                                              body       : post.body,
                                                                                              isPublished: post.isPublished,
                                                                                              updatedOn  : post.updatedOn,
                                                                                              createdOn  : post.createdOn
                                                                                            })));

  constructor(private router: ActivatedRoute,
              private database: DatabaseService,
              private formBuilder: FormBuilder) { }

  onSubmit(blogPostData) {
    console.log('blog post submitted', blogPostData);
    this.database.updatePost(blogPostData);
  }
}
