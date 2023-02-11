import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { User } from "../../../store/user/model";

@Component({
  selector: "ag-header",
  templateUrl: './header.components.html',
  styleUrls: ['./header.components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponents {
  // TODO: Investigate why null is required when user$ type is Observable<User | undefined>
  @Input() user: User | undefined | null;

  steamLogin() {
    window.location.href = "https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200";
  }
}
