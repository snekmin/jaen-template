/**
 * @license
 * 
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {CMSProvider} from '@snek-shipyard/jaen-cms'

import '~/common/css/base.scss'

import {HomePage} from './jaen/pages'

const App: React.FC = () => {
  return (
    <div style={{margin: 150}}>
      <CMSProvider
        settings={{gitRemote: 'snek-shipyard/jaen-template'}}
        pages={[HomePage]}></CMSProvider>
    </div>
  )
}

export default App
