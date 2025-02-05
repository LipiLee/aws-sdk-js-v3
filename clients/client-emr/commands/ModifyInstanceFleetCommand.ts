import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ModifyInstanceFleetInput } from "../models/models_0";
import {
  deserializeAws_json1_1ModifyInstanceFleetCommand,
  serializeAws_json1_1ModifyInstanceFleetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ModifyInstanceFleetCommandInput extends ModifyInstanceFleetInput {}
export interface ModifyInstanceFleetCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the
 *          specified InstanceFleetID within the cluster specified using ClusterID. The call either
 *          succeeds or fails atomically.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 */
export class ModifyInstanceFleetCommand extends $Command<
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyInstanceFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyInstanceFleetCommandInput, ModifyInstanceFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ModifyInstanceFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstanceFleetInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyInstanceFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyInstanceFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyInstanceFleetCommandOutput> {
    return deserializeAws_json1_1ModifyInstanceFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
