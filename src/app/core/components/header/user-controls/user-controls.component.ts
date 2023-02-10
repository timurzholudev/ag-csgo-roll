import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { User, Wallet } from "../../../../store/user/model";

@Component({
  selector: "ag-user-controls",
  templateUrl: './user-controls.component.html',
  styleUrls: ['./user-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserControlsComponent implements OnChanges {
  @Input() user: User | undefined;

  wallet: Wallet | undefined;
  private walletType = "main";

  ngOnChanges({ user }: SimpleChanges): void {
    if(!user.currentValue || user.currentValue === user.previousValue) {
      return;
    }
    this.wallet = this.user?.wallets.find(wallet => wallet.name.toLowerCase() === this.walletType)
  }


}
