Prism.languages.powershell = {
	'comment': [
		{
			pattern: /(^|[^`])<#[\w\W]*?#>/g,
			lookbehind: true
		},
		{
			pattern: /(^|[^`])#.*?(\r?\n|$)/g,
			lookbehind: true
		}
	],
	'string': {
		pattern: /("|')(\\?.)*?\1/g,
		inside: {}
	},
	// Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
	'namespace': /\[[a-z][\w\W]*?\]/i,
	'variable': /(\$\w+)\b/ig,
	'keyword': /\b(Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|In|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/gi,
	'function': [
		{
			// Full function names
			// Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
			pattern: /\b(Add-(Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-(Computer|Content|EventLog|History|Item|ItemProperty|Variable)|Compare-(Object)|Complete-(Transaction)|Connect-(PSSession)|ConvertFrom-(Csv|Json|StringData)|Convert-(Path)|ConvertTo-(Csv|Html|Json|Xml)|Copy-(Item|ItemProperty)|Debug-(Process)|Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-(PSSession)|Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-(PSSession)|Exit-(PSSession)|Export-(Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-(Object)|Format-(Custom|List|Table|Wide)|Get-(Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-(Object)|Import-(Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-(Path)|Limit-(EventLog)|Measure-(Command)|Measure-(Object)|Move-(Item|ItemProperty)|New-(Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(Default|File|GridView|Host|Null|Printer|String)|Pop-(Location)|Push-(Location)|Read-(Host)|Receive-(Job)|Receive-(PSSession)|Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(Computer|Item|ItemProperty)|Reset-(ComputerMachinePassword)|Resolve-(Path)|Restart-(Computer|Service)|Restore-(Computer)|Resume-(Job|Service)|Save-(Help)|Select-(Object|String|Xml)|Send-(MailMessage)|Set-(Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(Command|ControlPanelItem|EventLog)|Sort-(Object)|Split-(Path)|Start-(Job|Process|Service|Sleep|Transaction)|Stop-(Computer|Job|Process|Service)|Suspend-(Job|Service)|Tee-(Object)|Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-(Command)|Unblock-(File)|Undo-(Transaction)|Unregister-(Event|PSSessionConfiguration)|Update-(FormatData)|Update-(Help|List|TypeData)|Use-(Transaction)|Wait-(Event|Job|Process)|Where-(Object)|Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/gi
		},
		{
			// Aliases. Should come second, otherwise "write" gets preferred over "write-host" for example
			pattern: /\b(ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp|echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps|group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md|measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri|rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write)\b/gi
		}
	],
	'operator': {
		pattern: /(\W)-(and|x?or|not|eq|ne|gt|ge|lt|le|Like|(Not)?(Like|Match|Contains|In)|Replace)\b/gi,
		lookbehind: true
	}
};
// Variable interpolation inside strings
Prism.languages.powershell.string.inside.variable = Prism.languages.powershell.variable;