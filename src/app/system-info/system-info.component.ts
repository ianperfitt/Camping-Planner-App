import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SystemService } from '../data/system.service';

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.css'],
})
export class SystemInfoComponent implements OnInit {

  info: string | undefined;
  id!: number;
  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.parent?.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = +params.get('id')!;
        return this.systemService.getSystemInfo(this.id);
      })
    )
    .subscribe((data) => {
      this.info = data;
    });
  }
}
