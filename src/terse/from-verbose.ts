import VerboseSyslog from '../syslog.js';
import VerboseSyslogInfer from '../parameter/infer.js';
import Syslog from './syslog.js';

export default class FromVerbose<Terse extends VerboseSyslog> implements Syslog<VerboseSyslogInfer<Terse>> {

    constructor(public verbose : Terse) {
    }

    alert(...argument: VerboseSyslogInfer<Terse>) {

        this.verbose.alert(...argument);
    }

    crit(...argument: VerboseSyslogInfer<Terse>) {

        this.verbose.critical(...argument);
    }

    debug(...argument: VerboseSyslogInfer<Terse>) {

        this.verbose.debug(...argument);
    }

    emerg(...argument: VerboseSyslogInfer<Terse>) {

        this.verbose.emergency(...argument);
    }

    error(...argument: VerboseSyslogInfer<Terse>) {

        this.verbose.error(...argument);
    }

    info(...argument: VerboseSyslogInfer<Terse>) {

        this.verbose.informational(...argument);
    }

    notice(...argument: VerboseSyslogInfer<Terse>) {

        this.verbose.notice(...argument);
    }

    warning(...argument: VerboseSyslogInfer<Terse>) {

        this.verbose.warning(...argument);
    }
}

export {FromVerbose as TerseFromVerbose}
